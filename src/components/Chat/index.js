import React, { useEffect, useState } from "react";
import {
    Avatar,
    Button,
    ListItem,
    ListItemAvatar,
    ListItemText,
    makeStyles,
    TextField,
    Typography,
} from "@material-ui/core";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import "./style.css";

const processMessage = (payload) => {
    try {
        return JSON.parse(payload);
    } catch (err) {
        return null;
    }
};

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        maxWidth: "36ch",
        backgroundColor: theme.palette.background.paper,
    },
    inline: {
        display: "inline",
    },
}));

const Chat = () => {
    const history = useHistory();
    const classes = useStyles();
    const [message, setMessage] = useState("");
    const [wsRef, setwsRef] = useState(null);
    const [chatMessages, setChatMessages] = useState([]);

    useEffect(() => {
        var HOST = " ws://chatserver1343.herokuapp.com";
        const ws = new WebSocket(HOST + "/" + localStorage.getItem("token"));
        setwsRef(ws);

        ws.addEventListener("open", () => {
            ws.send(JSON.stringify({ intent: "old-message", count: 10 }));
        });

        ws.addEventListener("error", () => {
            toast.error("Please login !!");
            history.push("/login");
        });

        ws.addEventListener("message", (event) => {
            const { data } = event;
            const parseMessage = processMessage(data);
            if (!parseMessage) return;
            console.log("parse", parseMessage);
            if (parseMessage.intent === "chat") {
                setChatMessages((preState) => [...preState, parseMessage]);
            } else if (parseMessage.intent === "old-message") {
                setChatMessages(parseMessage.data.reverse());
            }
        });

        return () => {
            ws.close();
        };
    }, []);

    const sendMessage = (e) => {
        if (!message) {
            return;
        }
        if (wsRef.readyState !== WebSocket.OPEN) {
            return;
        }
        wsRef.send(JSON.stringify({ message, intent: "chat" }));
        setMessage("");
    };

    return (
        <>
            <div>
                {chatMessages.map((message, index) => (
                    <ListItem
                        alignItems="flex-start"
                        key={index}
                        style={{ maxHeight: 200, overflow: "auto" }}
                    >
                        <ListItemAvatar>
                            <Avatar
                                alt="Remy Sharp"
                                src="/static/images/avatar/1.jpg"
                            />
                        </ListItemAvatar>
                        <ListItemText
                            primary={message.user || message.email}
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                        color="textPrimary"
                                    >
                                        {message.message}
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                ))}
            </div>
            <div className="chat-box">
                <TextField
                    variant="filled"
                    color="primary"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    multiline
                    rows={2}
                    fullWidth
                />
                <Button
                    variant="outlined"
                    color="primary"
                    onClick={sendMessage}
                    fullWidth
                >
                    Send
                </Button>
            </div>
        </>
    );
};

export default Chat;

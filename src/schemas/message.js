const messageBluprint = {
	uid: "1234-1234-1234-1234",
	token: "1234-1234-1234-1234",
	status: "unread // pending // toBeDeleted",
	users: {
		from: "USER_HASH",
		to: "USER_HASH",
	},
	timeStamps : {
		sent: Date.now(),
		recived: Date.now(),
		read: Date.now(),
	},
	body: "Some message string, including markdown",
}

export default messageBluprint 
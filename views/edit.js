<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Edit your Chat</title>
</head>
<body>
    <p>Edit your Chat: <%= chat._id %> </p>
    <p>This was sent from <%=chat.from %> to <%= chat.to%></p>
    
    <form>
        <textarea name="msg" rows="6" cols="50"><%= chat.msg %></textarea>
        <br />
       <button>Edit</button>
    </form>
</body>
</html>

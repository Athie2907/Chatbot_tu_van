function sendMessage(){

    let input = document.getElementById("message");
    let message = input.value.trim();

    if(message === "") return;

    addMessage("user", message);

    let response = getBotResponse(message);

    setTimeout(()=>{
        addMessage("bot", response);
    },500);

    input.value="";
}

function addMessage(sender, text){

    let chatbox = document.getElementById("chatbox");

    let div = document.createElement("div");

    div.className = "message " + sender;

    div.innerText = text;

    chatbox.appendChild(div);

    chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotResponse(message){

    message = message.toLowerCase();

    if(message.includes("xin chào") || message.includes("hello")){
        return "Xin chào! Tôi có thể giúp gì cho bạn?";
    }

    if(message.includes("giá")){
        return "Sản phẩm có giá từ 200.000 đến 500.000 VNĐ.";
    }

    if(message.includes("giờ") || message.includes("mở cửa")){
        return "Cửa hàng mở cửa từ 8h đến 22h mỗi ngày.";
    }

    if(message.includes("địa chỉ")){
        return "Cửa hàng ở 280 An Dương Vương, TP.HCM.";
    }

    if(message.includes("cảm ơn")){
        return "Rất vui được hỗ trợ bạn!";
    }

    return "Xin lỗi, tôi chưa hiểu câu hỏi của bạn.";
}
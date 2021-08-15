let userName;  //ユーザーの名前
let userResult;//おみくじの結果

//ユーザーに名前を入力してもらい、userNameに格納
userName = prompt("お名前を教えてください。");

//ユーザーの名前が入力されない場合
if (userName == "") {
    userName = "名無し";
}

document.getElementById("name").innerHTML = userName;//ユーザーの名前を出力

const rand = Math.floor(Math.random() * 5);//1~4の乱数をrandに格納

//乱数の値に応じてuserResultにおみくじの結果を格納
switch (rand) {
    case 0:
        userResult = "大吉";
        break;
    case 1:
        userResult = "中吉";
        break;

    case 2:
        userResult = "小吉";
        break;

    case 3:
        userResult = "吉";
        break;

    case 4:
        userResult = "凶";
        break;
    default:
        break;
}

document.getElementById("result").innerHTML = userResult;//おみくじの結果を出力

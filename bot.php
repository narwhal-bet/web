<?php

require 'vendor/autoload.php';

use TelegramBotApi;

// توکن ربات تلگرام خود را در اینجا وارد کنید
$telegram = new Api('7591269833:AAFT22PGrb4G2GytZ99TOXZLaIwNwPvB13M');

// تابعی برای ارسال سیگنال
function sendSignal($signal) {
    global $telegram;
    $chatId = 'https://t.me/Narwhal_bet'; // شناسه کانال خود را وارد کنید

    $telegram->sendMessage([
        'chat_id' => $chatId,
        'text' => "سیگنال جدید: " . $signal,
        'parse_mode' => 'HTML'
    ]);
}

// تابعی برای ارسال وین
function sendWin($win) {
    global $telegram;
    $chatId = 'https://t.me/Narwhal_bet'; // شناسه کانال خود را وارد کنید

    $telegram->sendMessage([
        'chat_id' => $chatId,
        'text' => "وین جدید: " . $win,
        'parse_mode' => 'HTML'
    ]);
}

// مثال‌هایی از سیگنال‌ها و وین‌ها
$exampleSignal = "شرط: تیم A برنده خواهد شد.";
$exampleWin = "وین: تیم B برنده شد.";

// ارسال سیگنال و وین به کانال
sendSignal($exampleSignal);
sendWin($exampleWin);

?>

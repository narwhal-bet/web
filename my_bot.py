from telegram import Update
from telegram.ext import Updater, CommandHandler, CallbackContext

# تابعی برای پاسخ به دستور /start
def start(update: Update, context: CallbackContext) -> None:
    update.message.reply_text('سلام! من یک ربات تلگرام هستم.')

# تابعی برای پاسخ به دستور /help
def help_command(update: Update, context: CallbackContext) -> None:
    update.message.reply_text('چگونه می‌توانم به شما کمک کنم؟')

def main():
    # توکن خود را اینجا وارد کنید
    updater = Updater("7591269833:AAFT22PGrb4G2GytZ99TOXZLaIwNwPvB13M")

    # دریافت دیسپاچر برای ثبت هندلرها
    dispatcher = updater.dispatcher

    # ثبت هندلرها
    dispatcher.add_handler(CommandHandler("start", start))
    dispatcher.add_handler(CommandHandler("help", help_command))

    # شروع ربات
    updater.start_polling()

    # تا زمانی که Ctrl+C فشار داده نشود، ربات در حال اجرا خواهد بود
    updater.idle()

if __name__ == '__main__':
    main()

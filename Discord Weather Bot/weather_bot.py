
from discord.ext import commands
import discord
import requests

intents = discord.Intents.default()
intents.messages = True  

bot = commands.Bot(command_prefix='/', intents=intents)


@bot.command(name='weather')
async def get_weather(ctx, *, city):
    print(f"Received !weather command with argument: {city}")

    api_key = 'YOUR_API_KEY'
    base_url = 'http://api.openweathermap.org/data/2.5/weather'
    params = {'q': city, 'appid': api_key, 'units': 'metric'}

    response = requests.get(base_url, params=params)
    data = response.json()

    if response.status_code == 200:
        weather_description = data['weather'][0]['description']
        temperature = data['main']['temp']

        await ctx.send(f'The weather in {city} is {weather_description} with a temperature of {temperature}°C.')
    else:
        await ctx.send(f'Error fetching weather information for {city}. Status Code: {response.status_code}')

bot.run('YOUR_BOT_TOKEN')

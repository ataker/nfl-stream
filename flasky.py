from flask import Flask
import nflgame
import json

app = Flask(__name__)

@app.route('/')
def samplefunction():
    #access your DB get your results here

	year, week = nflgame.live.current_year_and_week()
	games = nflgame.live.current_games(year, week)
	#games = nflgame.games(2015, week=[1])
	ss = "{\"games\":["
	for game in games:
		ss += "{"
		ss += "\"home\":\"" + game.home + "\", "
		ss += "\"away\":\"" + game.away + "\", "
		ss += "\"score_home\":\"" + str(game.score_home) + "\", "
		ss += "\"score_away\":\"" + str(game.score_away) + "\", "
		ss += "\"time\":\"" + str(game.time) + "\", "
		ss += "\"drives\":["
		for drive in game.drives:
			ss += "{\"plays\":["
			for play in drive.plays:
				
				ss += json.dumps(play.data, ensure_ascii=False) + ", "
				#  (a.data).replace("{u","{").replace(" u'"," '").replace(" None,"," 'None',")
			ss =ss[:-2] + "]}, "
		ss =ss[:-2] + "]}, "
	ss = ss[:-2] + "]}"
	return ss


app.run()
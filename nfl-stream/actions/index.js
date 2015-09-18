import fetch from 'isomorphic-fetch';

export const GOT_PLAYS = 'GOT_PLAYS';

export function gotPlays(data) {
  return {
    type: GOT_PLAYS,
    plays: json,
    receivedAt: Date.now()
  };
}

export function getPlays() {

  return dispatch => {
  return fetch(`localhost:5000`,
  {
  	method:"GET",
  	body:JSON.stringify(d),
      headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  	},
  })
      .then(req => req.json())
      .then(json => dispatch(gotPlays(json)));
  
  }
}
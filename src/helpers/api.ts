import request from "requestretry";

const URL = "https://kbase-core-test.herokuapp.com/";

export default async function(link: string) {
	return new Promise<[boolean, any]>(resolve => {
		request(
			{
				url: URL + link,
				json: true,
				maxAttempts: 10,
				retryDelay: 1000,
				retryStrategy: function(err: any, response: any, body: any) {
					return (
						err ||
						response.statusCode != 200 ||
						Object.keys(body).length === 0
					);
				}
			},
			(err, res, body) => {
				if (err || res.statusCode != 200) {
					throw new Error("Api seems to be offline");
				} else {
					return resolve([true, body]);
				}
			}
		);
	});
}

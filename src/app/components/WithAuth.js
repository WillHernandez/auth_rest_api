"use client"
import { Amplify } from "aws-amplify"
import config from '../../../src/aws-exports'
Amplify.configure(config)
import { API } from "aws-amplify"
import { withAuthenticator } from "@aws-amplify/ui-react"
import '@aws-amplify/ui-react/styles.css';

function withAuth({ signOut, user }) {

	const sendApi = async () => {
		const requestInfo = {
			headers: { 
				Authorization: user.signInUserSession.idToken.jwtToken
			}
		}
		const data = await API.get('reactrestauthapi', `/auth`, requestInfo)
		console.log({ data });
	}

  return (
    <>
			<button onClick={sendApi}>Send Api</button>
      <button onClick={signOut}>Sign out</button>
    </>
  );
}

export default withAuthenticator(withAuth);
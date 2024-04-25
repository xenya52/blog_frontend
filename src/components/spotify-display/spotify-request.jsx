
async function GetSelfSpotifyAccount() {
    let accessToken = localStorage.getItem('access_token');
  
    const response = await fetch('https://api.spotify.com/v1/me', {
      headers: {
        Authorization: 'Bearer ' + accessToken
      }
    });
  
    const data = await response.json();
    return (
        <>
            {data}
        </>
    )
  }

  export default GetSelfSpotifyAccount
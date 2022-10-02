
export const serviceCall = async (httpMethod: any, getUrl: RequestInfo | URL, reqBody: any) => {
    const options = {
      method: httpMethod,
      headers: { 
        'Content-Type': 'application/json',
        'accept': 'application/json',
      },
        ...(reqBody ? { body: JSON.stringify(reqBody) } : "")
    };
    return fetch(getUrl, options).then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw response;
    }).catch((error) => {
      console.log("Error occurred in Service Call" + error);
    })
  };
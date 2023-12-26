import React, { useEffect, useState } from 'react';
import { useKeycloak } from "@react-keycloak/web";

const Secured = () => {
  const [data, setData] = useState(null)
  const { keycloak, initialized } = useKeycloak();

  const handleClick = async () => {
    try {
      const data = await (await fetch(`http://localhost:3000/secured`,{
        headers: {
          "Authorization": `Bearer ${keycloak.token}`
        }
      })).json()
      setData(data)
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div>
      <h1 className="text-black text-4xl">Welcome to the Protected Page.</h1>
      <button type="submit" onClick={handleClick} >Search</button>
    </div>
  );
};

export default Secured;
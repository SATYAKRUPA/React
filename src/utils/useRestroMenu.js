import { MENU_URL } from "./contents";
import { useEffect,useState } from "react";

const useRestroMenu=(resId)=>
{
    const[menu,setMenu]=useState(null);
    useEffect(() => {
        fetchMenu();
      }, []);
    
      const fetchMenu = async () => {
        const data = await fetch(MENU_URL+resId);
        const json = await data.json();
        console.log("menu data:", json);
        setMenu(json.data);
    };
    return menu;
}

export default useRestroMenu;
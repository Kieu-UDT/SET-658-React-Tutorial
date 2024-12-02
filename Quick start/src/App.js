import { useState } from "react";
import MyButton from "./components/MyButton/MyButton";
import Profile from "./components/Profile/Profile";
import ShoppingList from "./components/ShoppingList/ShoppingList";
export default function MyApp() {
    const [count, setCount] = useState(0);

    function handleClick() {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Counters that update separately</h1>
            <p>Counter A</p>
            <MyButton count={count} onClick={handleClick} />
            <p>Counter B</p>
            <MyButton count={count} onClick={handleClick} />
            <Profile />
            <ShoppingList />

        </div>
    );
}

// 2. Displaying Data
const user = {
    name: " Luffy ",
    imageUrl: "https://i.pinimg.com/736x/78/46/75/7846752cfd7b02455fa07c42a5ab2f37.jpg",
    imageSize: 200
};

export default function Profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={"Photo of" + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    );
}
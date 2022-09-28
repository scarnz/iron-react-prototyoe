import S670 from "../img/S670.jpeg"

export default function Welcome() {
  return (
    <>
      <div className="wrapper">
        <h1>Welcome To My App</h1>
        <p>This is going to be the coolest app in the world!</p>
        <img src={S670} alt="S670 Combine" width={200} />
      </div>
    </>
  );
}
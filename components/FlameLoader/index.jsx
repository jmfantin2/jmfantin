//https://codepen.io/z-/pen/JXVpgp
//<h1 style={{color: "red"}}>Hello Style!</h1>

export function FlameLoader(props) {
  switch (props.mode) {
    case "fullpage":
      return (
        <div className="oxygen bg-white h-[100vh] w-full justify-center items-center pb-20">
          <div className="fire">
            <div className="flames">
              <div className="flame"></div>
              <div className="flame"></div>
              <div className="flame"></div>
            </div>
          </div>
        </div>
      );
    default:
      return (
        <div className="oxygen">
          <div className="fire">
            <div className="flames">
              <div className="flame"></div>
              <div className="flame"></div>
              <div className="flame"></div>
            </div>
          </div>
        </div>
      );
  }
}

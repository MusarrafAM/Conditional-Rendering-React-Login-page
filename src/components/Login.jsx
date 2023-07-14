import Input from "./Input";

function Login(props) {
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      {/* {props.isRegistered === false  && <Input type="password" placeholder="Confirm Password" />} */}
      {/* beow line is the shorter version of above line (Currently commented)*/}
      {!props.isRegistered && <Input type="password" placeholder="Confirm Password" />} 
      <button type="submit">{props.isRegistered ? "Submit" : "Register"}</button>
    </form>
  );
}

export default Login;

import {useSelector}from"react-redux";
import {useDispatch}from"react-redux";
import {useState} from "react";
import { userSchemaValidation} from "../Validations/UserValidations";
import {Container,Row ,Col,Label,FormGroup,Input,Form,Button} from "reactstrap";
import {useForm} from "react-hook-form";
//import {addUser,deleteUser,updateUser} from "../Features/UserSlice";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerUser, } from "../Features/UserSlice";
import { useNavigate } from "react-router-dom";

const Register = () => {
const userList =useSelector((state)=>state.users.value);

const[name,setname]=useState("");
const[email,setemail]=useState("");
const[password,setpassword]=useState("");

  const{
    register,
    handleSubmit,
    setValue,
    trigger,
    formState:{errors},
  }=useForm({
    resolver:yupResolver(userSchemaValidation)
  });

const navigate = useNavigate()
const dispatch=useDispatch();

const onSubmit=(data)=>{
  try{
    const userData={
      name:data.name,
      email:data.email,
      password:data.password,
    };
    console.log("Form Data", data);
    alert("Validation all good.");
    dispatch(registerUser(userData));
    navigate("/login"); 
  } catch (error) {
    console.log("Error.");
  }
};

const handleUpdate = (email) => {
  const userData = {
    name: name, //create an object with the values from the state variables
    email: email,
    password: password,
  };
  dispatch(updateUser(userData)); //use the useDispatch hook to dispatch an action, passing as parameter the userData
};

  return (
    <div className="formrow">
    <Container>
      <Row>
        <Col md={6}>
    <Form className="div-form"  onSubmit={handleSubmit(onSubmit)}>
      <br></br>
  <FormGroup>
  <Label
      for="exampleName"
      hidden
    >
    </Label>
    <Input
      id="name"
      name="text"
      placeholder="Enter your name..."
      {
        ...register("name")
      }
      onChange={(e)=>{setValue("name",e.target.value);
        trigger("name");
      }}
      type="String"
    /> 
     <p className="error">{errors.name?.message}</p>
    <Label
      for="exampleEmail"
      hidden
    >
      Enter your email...
    </Label>
    <Input
      id="email"
      name="email"
      placeholder="Enter your email..."
      {
        ...register("email")
      }
      onChange={(e)=>{setValue("email",e.target.value);
        trigger("email");
      }}
      type="String"
    />
    <p className="error">{errors.email?.message}</p>
    <Label
      for="Password"
      hidden
    >
      Enter your password...
    </Label>
    <Input
      id="examplePassword"
      name="password"
      placeholder="Enter your password..."
      {
        ...register("password")
      }
      onChange={(e)=>{setValue("password",e.target.value);
        trigger("password");
      }}
      type="password"
    />
    <p className="error">{errors.password?.message}</p>
    <Label
      for="examplePassword"
      hidden
    >
      
    </Label>
    <Input
      id="conformpassword"
      name="conformpassword"
      placeholder="Conform your password..."
      {
        ...register("conformpassword")
      }
      onChange={(e)=>{setValue("conformpassword",e.target.value);
        trigger("conformpassword");
      }}
      type="password"
    />
    <p className="error">{errors.confirmPassword?.message}</p>
    <Row>
    <Button color="primary" className="button">
         Register
       </Button>
    </Row>
    
  </FormGroup>
  </Form>
  </Col>
  </Row>
  </Container>
  </div>
  );

};

export default Register;

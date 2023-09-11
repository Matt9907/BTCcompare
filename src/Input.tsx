import {ChangeEventHandler} from "react";

type InputProps = {
value : string,
onChange: ChangeEventHandler<HTMLInputElement>;
};

export default function Input(props:InputProps){
return (
    <input type="text" 
  value= {props.value} 
  onChange={props.onChange }/>




);

}
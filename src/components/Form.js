import React, {useState} from "react";
import styled from "styled-components";
import axios from "axios";
import * as yup from "yup"
//name, pizza size dropdown, checklist toppings, instructions textarea/ add order
const FormContainer = styled.form`
  
`
const Title = styled.div`

`

const InputContainer = styled.div`

`

const Input = styled.input`

`
const Label = styled.label`

`

const Select = styled.select`

`

const Error = styled.p`
  color: red;
 ` 

const Button = styled.button`

`

const formSchema = yup.object().shape({
  name: yup 
    .string()
    .min(2, "Your name must be at least two characters long."),
  size: yup
    .string()
    .min(1, "You must pick a size"),
});

export default function Form(props) {
  const [formState, setFormState] = useState({
    name: "",
    size: "",
    toppings: [],
    instructions: "",
  });

  const [errorsState, setErrorsState] = useState({});

  function submit(e) {
    e.preventDefault();
    formSchema.validate(formState, {abortEarly: false})
      .then(value=>setErrorsState({}))
      .catch(err=> {
        let errors = err.inner;
        let errorsObj = {};
        for (let i in errors) {
          let key = errors[i].params.path;
          errorsObj[key] = errors[i].errors[0];
        }
        setErrorsState(errorsObj);
    });
    formSchema.isValid(formState)
      .then(valid=> {
        axios.post("https://reqres.in/api/users", formState) //submit form data to url
        .then(res => console.log(res))
        .catch(err => console.log(err));
    })
  }

  function updateForm(e) {
    if (e.target.name === "toppings") {
      setFormState({...formState}, formState[e.target.name].push(e.target.value))
    }
    else {
      setFormState({...formState, [e.target.name]: e.target.value})
    }
  }

  return (
    <div className="form-page-container">
      <Title>Build Your Own Pizza</Title>
      <FormContainer onSubmit={submit}>
        <InputContainer>
          <Label htmlFor="name">Name:</Label>
          <Input
            type="text"
            name="name"
            placeholder="Mr. Peps"
            onChange={updateForm}
          />
          {errorsState.name && <Error>{errorsState.name}</Error>}
        </InputContainer>


        <InputContainer>
          <Select
            type="dropdown"
            name="size"
            onChange={updateForm}
          >
            <option value="">Pick a size</option>
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
            <option value="xl">XL</option>
          </Select>
          {errorsState.size && <Error>{errorsState.size}</Error>}
        </InputContainer>


        <InputContainer>
          <p>Select toppings:</p>
          <Label htmlFor="toppings">
            <Input
              type="checkbox"
              name="toppings"
              value="pepperoni"
              onChange={updateForm}
            />pepperoni
          </Label>
          <Label htmlFor="toppings">
            <Input
              type="checkbox"
              name="toppings"
              value="pineapple"
              onChange={updateForm}
            />pineapple
          </Label>
          <Label htmlFor="toppings">
            <Input
              type="checkbox"
              name="toppings"
              value="bell peppers"
              onChange={updateForm}
            />bell peppers
          </Label>
          <Label htmlFor="toppings">
            <Input
              type="checkbox"
              name="toppings"
              value="mushrooms"
              onChange={updateForm}
            />mushrooms
          </Label>
          <Label htmlFor="toppings">
            <Input
              type="checkbox"
              name="toppings"
              value="peanut butter"
              onChange={updateForm}
            />peanut butter
          </Label>
          {errorsState.toppings && <Error>{errorsState.toppings}</Error>}
        </InputContainer>
    

        <InputContainer>
          <Label htmlFor="instructions">Special Instructions:</Label>
          <textarea
            name="instructions"
            value={formState.instructions}
            placeholder="Please whisper sweet nothings to my pizza."
            onChange={updateForm}
          />
          {errorsState.instructions && <Error>{errorsState.instructions}</Error>}
        </InputContainer>

        <Button type="submit">Place Your Order</Button>
      </FormContainer>
    </div>
  )
}
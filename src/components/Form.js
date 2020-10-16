import React, {useState} from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom";
import axios from "axios";
import * as yup from "yup"

const PageContainer = styled.div`
  height: 100vh;
  background-size: cover;
  background-image: url("/assets/ivan-torres-MQUqbmszGGM-unsplash.jpg");
`

const FormContainer = styled.form`
  font-size: 1.4rem;
  border-radius: 7px;
  width: 50%;
  margin: 0 auto; 
  padding: 2%;
`
const Title = styled.h3`
  text-align: center;
  font-size: 2rem;
  background-color: white;
  border-radius:5px;
  margin: 0;
`

const InputContainer = styled.div`
  padding: 2%;
  font-weight: bold;
  border-radius: 5px;
  background-color: #ffb600;

`
const InputContainerRed = styled.div`
  font-weight: bold;
  padding: 2%;
  border-radius: 5px;
  background-color: ${props => props.theme.red};
`

const Input = styled.input`
  font-size: 1.4rem;

`
const Label = styled.label`
`

const Select = styled.select`
  font-size: 1.4rem;
`
const Textarea = styled.textarea`
  font-size: 1.4rem;

`

const Toppings = styled.p`
  margin: 1%;
`
const Checkboxes = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 15vh;
`

const Error = styled.p`
  color: white;
 ` 

const Button = styled.button`
  font-size: 1.5rem;
  margin-left: 30%;
  margin-top: 2%;
  background-color: ${props => props.theme.red};
  color: white;
  border-radius: 5px;
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
  let history = useHistory();
  const [errorsState, setErrorsState] = useState({});
  const {updateForm, formState} = props;

  function submit(e) {  
    e.preventDefault();
    formSchema.validate(formState, {abortEarly: false})
      .then(value=> {
        setErrorsState({});
        axios.post("https://reqres.in/api/users", formState) //submit form data to url
        .then(res => history.push("/success"))
        .catch(err => console.log(err));
      })
      .catch(err=> {
        let errors = err.inner;
        let errorsObj = {};
        for (let i in errors) {
          let key = errors[i].params.path;
          errorsObj[key] = errors[i].errors[0];
        }
        setErrorsState(errorsObj);
    });
  }

  return (
    <PageContainer>
        <FormContainer onSubmit={submit}>
          <Title>Build Your Own Pizza</Title>
          <InputContainerRed>
            <Label htmlFor="name">Name: </Label>
            <Input
              type="text"
              name="name"
              placeholder="Mr. Peps"
              onChange={updateForm}
            />
            {errorsState.name && <Error>Error: {errorsState.name}</Error>}
          </InputContainerRed>


          <InputContainer>
            <Label htmlFor="size">Size: </Label>
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
            {errorsState.size && <Error>Error: {errorsState.size}</Error>}
          </InputContainer>


          <InputContainerRed>
            <Toppings>Select toppings:</Toppings>
            <Checkboxes>
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
              <Label htmlFor="toppings">
                <Input
                  type="checkbox"
                  name="toppings"
                  value="jalapenos"
                  onChange={updateForm}
                />jalapenos
              </Label>
            </Checkboxes>
          </InputContainerRed>
      

          <InputContainer>
            <Label htmlFor="instructions">Special Instructions: </Label>
            <Textarea
              name="instructions"
              value={formState.instructions}
              placeholder="Please whisper sweet nothings to my pizza."
              onChange={updateForm}
            />
          </InputContainer>

          <Button type="submit">Place Your Order</Button>
        </FormContainer>
    </PageContainer>
  )
}
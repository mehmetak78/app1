import React, {useState} from 'react';
import styles from './Booking.module.scss';
import Form from "../UI/Form";
import Card from "../UI/Card";
import Input from "../UI/Input";
import useInput from "../../hooks/useInput";
import Button from "../UI/Button";
import {Combobox} from "../UI/ComboBox";

const Booking = (props) => {

  const username = useInput('text', 'name', 'User Name', (value) => value.trim() !== '')
  const password = useInput('text', 'password', 'Password', (value) => value.trim() !== '')

  const [combo1SelectedItems, setCombo1SelectedItems] = useState(new Set());

  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
  }

  const cancelHandler = () => {
    //router.push('/')
  }

  return (
    <section ref={props.sectionRef} className={styles.sectionBooking}>
      <div className="u-center-text">
        <h2 className="heading-secondary u-margin-bottom-big">
          Booking
        </h2>
      </div>
      <div className={styles.container}>
        <Form onSubmit={submitHandler} className={styles.form}>
          <div>
            <Input inputHook={username}/>
            <Input inputHook={password}/>
            <Combobox
              label="Rooms"
              id="cb1"
              name="cb1"
              type="text"
              autoComplete="rooms"
              required
              /*multi*/
              hasBlank
              selectedItems={combo1SelectedItems}
              items={
                [
                  {id: "1"},
                  {id: "2"},
                  {id: "3"},
                ]
              }
            />
          </div>
          <div className={styles["form-actions"]}>
            <Button
              buttontype='btn1'
              className={styles.btnBooking}
            > Book now
            </Button>
          </div>
          {isLoading && <LoadingSpinner/>}
        </Form>
        <img className={styles.image} src="/imgHS/hs2.jpg" alt="Hotel Silvanus"/>
      </div>
    </section>
  );
};

export default Booking;

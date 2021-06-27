import React, {useEffect, useState} from 'react';
import styles from "./ComboBox.module.scss";

const FIRST_SINGLE_MESSAGE = "(Select Item)";
const FIRST_MULTI_MESSAGE = "(Select Items)";
const MULTI_SELECTED_MESSAGE = "(Multiple Selected)";

const closeAllComboItems = () => {

  console.log('closeAllComboItems')
  const allComboItems = document.querySelectorAll('.'+styles["combo-items"]);
  console.log({allComboItems})
  allComboItems.forEach(comboItems=> {
    comboItems.classList.remove(styles["combo-items-active"]);
  })
/*  const formButtons = document.querySelector(".form-btn-group");
  formButtons.classList.remove("form-btn-group-stop-hover");*/
}

const Combobox = (props) => {
  const {name, label, required, multi, hasBlank, items, selectedItems} = props;

  const [comboText, setComboText] = useState("");

  useEffect(() => {
    if (multi) {
      setComboText(FIRST_MULTI_MESSAGE);
    }
    else {
      setComboText(FIRST_SINGLE_MESSAGE);
    }
    // eslint-disable-next-line
  }, []);

  const closeComboItem = (comboItems) => {
    if (comboItems) {
      comboItems.classList.remove(styles["combo-items-active"]);
/*      const formButtons = document.querySelector(".form-btn-group");
      formButtons.classList.remove("form-btn-group-stop-hover");*/
    }
  }
  
  const comboMainClicked = (e) => {
    const comboItems = e.target.querySelector('.'+styles["combo-items"]);
    if (comboItems) {
      comboItems.classList.toggle(styles["combo-items-active"]);
/*      const formButtons = document.querySelector(".form-btn-group");
      formButtons.classList.toggle("form-btn-group-stop-hover");*/
    }
  }

  const comboItemClicked = (e) => {
    e.stopPropagation();
    if (multi) {
      if (selectedItems.has(e.target.id)) {
        selectedItems.delete(e.target.id);
      } else {
        selectedItems.add(e.target.id);
      }
      if (selectedItems.size>1) {
        setComboText(MULTI_SELECTED_MESSAGE);
      } else if (selectedItems.size===1) {
        setComboText(selectedItems.values().next().value)
      }
      else {
        setComboText(FIRST_MULTI_MESSAGE);
      }
      e.target.classList.toggle(styles["combo-item-selected"]);
    }
    else {
      setComboText(e.target.id);
      const comboItems = e.target.parentNode;
      closeComboItem(comboItems);
      selectedItems.forEach(item=> {
        selectedItems.delete(item);
      })
      const previousItem = comboItems.querySelector('.'+styles["combo-item-selected"]);
      if (previousItem) {
        previousItem.classList.remove(styles["combo-item-selected"])
      }
      if (e.target.id !== FIRST_SINGLE_MESSAGE) {
        selectedItems.add(e.target.id);
        e.target.classList.add(styles["combo-item-selected"]);
      }
    }
  }

  const emptyItem = (
    multi ? "" :
     hasBlank ? <div className={styles["combo-item"]} id={FIRST_SINGLE_MESSAGE} onClick={comboItemClicked}>&nbsp;</div> : ""
  )

  const cbItems = (
    items.map(item=> {
      return <div className={styles["combo-item"]} id={item.id} onClick={comboItemClicked}>{item.id}</div>
    })
  )

  const classNameForRequired = required ? styles.required :  " ";
  return (
    <div className={`${styles.combobox} ${props.className}`}>
      <div className={`${styles['combo-input']} ${classNameForRequired}`} onClick={comboMainClicked}>
        {comboText}
        <div className={styles["combo-items"]}>
          {emptyItem}
          {cbItems}
        </div>
      </div>
      <label htmlFor={name}>{label}</label>
    </div>
  );
};

Combobox.defaultProps = {
  id: "",
  name: "",
  label: "Label",
  type: "text",
  autoComplete: "",
  required: false,
  multi: false,
  hasBlank: false
}
export {Combobox, closeAllComboItems};

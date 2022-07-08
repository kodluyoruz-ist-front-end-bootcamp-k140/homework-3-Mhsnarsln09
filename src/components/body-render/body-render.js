import React from "react";
import { useState } from "react";
import { PostsFn, PostsCls, ToDoFn, ToDoCls } from "../data-grid";
import ThemeSwitcher from "../theme-switcher";
import { useContext } from "react";
import { ThemeContext } from "../../context";
import "./style.css"


export function BodyRender () {
    const [activeData, setActiveData] = useState("posts")
    const [activeComponents, setActiveComponents] = useState("cls")
    const {theme} = useContext(ThemeContext)

    
    return (
 <>
        <div className="theme-switcher"> <h3>Tema : {theme}</h3>
          <ThemeSwitcher/>
        </div>
        <div className='container'>
        <div className="btn-component">
        <button onClick={() => setActiveComponents("cls")} className={activeComponents === "cls" ? "btn btn-outline-info" : "btn btn-default"}  style={{"margin":"5px 5px" }}>Class Components</button>
         <button onClick={() => setActiveComponents("fn")} className={activeComponents === "fn" ? "btn btn-outline-info" : "btn btn-default"}  style={{"margin":"5px 5px" }}>Function Components</button>
      </div>
        { activeComponents == "cls" ? 
        <div className="btn-data">
          <button onClick={() => setActiveData("posts")} className={activeData === "posts" ? "btn btn-outline-info" : "btn btn-default"} style={{"margin":"5px 5px" }}>Posts</button>
          <button onClick={() => setActiveData("todos")} className={activeData === "todos" ? "btn btn-outline-info" : "btn btn-default"} style={{"margin":"5px 5px" }}>ToDos</button> 
         {activeData == "todos" ? <ToDoCls/> : <PostsCls/> }
        </div>
          : 
          <div className="btn-data">
           <button onClick={() => setActiveData("posts")} className={activeData === "posts" ? "btn btn-outline-info" : "btn btn-default"}   style={{"margin":"5px 5px" }}>Posts</button>
          <button onClick={() => setActiveData("todos")} className={activeData === "todos" ? "btn btn-outline-info" : "btn btn-default"}  style={{"margin":"5px 5px" }}>ToDos</button>
          {activeData == "posts" ? <PostsFn/> : <ToDoFn/> }
         </div> }
      </div>
      </>
    )
}
import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { useHistory } from "react-router";
import { dzikir_pagi } from "../../data/db";
import Layout from "../layout/Layout";

import "./dzikirfajr.scss";

const DzikirFajr = () => {
  const history = useHistory();
  window.scrollTo(0, 0);
  return (
    <Layout>
      <div className='wrapper-dzikir'>
        <div className='header-dzikir'>
          <FaChevronLeft onClick={() => history.goBack()} className='icon' />
          <p>Dzikir Pagi</p>
        </div>
        <div className='wrapper-flex'>
          {dzikir_pagi.map((item, i) => (
            <div key={i}>
              <div className='flex'>
                <p className='title'>{item.title}</p>
                <p>{item.instruction}</p>
              </div>
              <p className='arabic' dir='RTL'>
                {item.arabDesc}
              </p>
              <p>{item.latinDesc}</p>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default DzikirFajr;

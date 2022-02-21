import React, { useState } from "react";

const App = () => {
  const defaultCheckedItemsState = {
    listA: 0,
    listB: 0,
  };
  const [checkedItems, setCheckedItems] = useState(defaultCheckedItemsState);
  const [compliancePassed, setCompliancePassed] = useState(false);

  const [showListA, setShowListA] = useState(true);
  const [showListB, setShowListB] = useState(true);

  const onChangeHandler = (event) => {
    if (event.target.checked) {
      setCheckedItems({
        ...checkedItems,
        [event.target.name]: (checkedItems[[event.target.name]] += 1),
      });
    } else {
      setCheckedItems({
        ...checkedItems,
        [event.target.name]: (checkedItems[[event.target.name]] -= 1),
      });
    }

    if (
      checkedItems.listA >= 3 ||
      (checkedItems.listA >= 2 && checkedItems.listB >= 2)
    ) {
      return setCompliancePassed(true);
    } else {
      return setCompliancePassed(false);
    }
  };

  return (
    <>
      <h1 style={{ fontSize: "16px", textDecoration: "underline" }}>
        3 Question from List A or 2 Questions from List A and 2 Questions from
        List B
      </h1>

      <h2
        style={{
          color: compliancePassed ? "#2eb217" : "red",
          background: "white",
          width: "fit-content",
          padding: "0 5px 0 0",
        }}
      >
        {compliancePassed
          ? "Compliance status: PASSED ✅"
          : "Compliance status: FAILED ❌"}
      </h2>

      <div>
        <h2 className="listHeader" onClick={() => setShowListA(!showListA)}>
          List A
        </h2>
        {showListA && (
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    id="a_1"
                    name="listA"
                    onChange={(event) => onChangeHandler(event)}
                  />

                  <label htmlFor="a_1">
                    Contact Name or any other name authorised on the account
                    (Including position at company)
                  </label>
                </td>
              </tr>

              <tr>
                <td>
                  <input
                    type="checkbox"
                    id="a_2"
                    name="listA"
                    onChange={(event) => onChangeHandler(event)}
                  />

                  <label htmlFor="a_2">Customer’s Account Number</label>
                </td>
              </tr>

              <tr>
                <td>
                  <input
                    type="checkbox"
                    id="a_3"
                    name="listA"
                    onChange={(event) => onChangeHandler(event)}
                  />

                  <label htmlFor="a_3">Amount of Last Invoice</label>
                </td>
              </tr>

              <tr>
                <td>
                  <input
                    type="checkbox"
                    id="a_4"
                    name="listA"
                    onChange={(event) => onChangeHandler(event)}
                  />
                  <label htmlFor="a_4">Customer’s current Payment Method</label>
                </td>
              </tr>

              <tr>
                <td>
                  <input
                    type="checkbox"
                    id="a_3"
                    name="listA"
                    onChange={(event) => onChangeHandler(event)}
                  />
                  <label htmlFor="a_3">Customer’s Email Address</label>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      <div>
        <h2 className="listHeader" onClick={() => setShowListB(!showListB)}>
          List B
        </h2>
        {showListB && (
          <table>
            <tbody>
              <tr>
                <td>
                  <input
                    type="checkbox"
                    id="b_1"
                    name="listB"
                    onChange={(event) => onChangeHandler(event)}
                  />

                  <label htmlFor="b_1">Company Name/Trading Name</label>
                </td>
              </tr>

              <tr>
                <td>
                  <input
                    type="checkbox"
                    id="b_2"
                    name="listB"
                    onChange={(event) => onChangeHandler(event)}
                  />

                  <label htmlFor="b_2">Customer’s Contact Number</label>
                </td>
              </tr>

              <tr>
                <td>
                  <input
                    type="checkbox"
                    id="b_3"
                    name="listB"
                    onChange={(event) => onChangeHandler(event)}
                  />

                  <label htmlFor="b_3">Customer’s Billing Address</label>
                </td>
              </tr>

              <tr>
                <td>
                  <input
                    type="checkbox"
                    id="b_4"
                    name="listB"
                    onChange={(event) => onChangeHandler(event)}
                  />

                  <label htmlFor="b_4">Customer’s Supply Address</label>
                </td>
              </tr>
            </tbody>
          </table>
        )}
      </div>

      <br />

      <button
        onClick={() => {
          setCheckedItems(defaultCheckedItemsState);
          setCompliancePassed(false);

          return document
            .querySelectorAll("input[type=checkbox]")
            .forEach((el) => (el.checked = false));
        }}
      >
        Reset
      </button>
    </>
  );
};

export default App;

import { useState, useEffect } from "react";
import Importfile from "./Importfile";
import RunSQL from "./RunSql";
import AIPrompt from "./AIPrompt";
import SampleData from "./SampleData";
import DropdownModal from "./DropdownModal";
import DrawChart from "./DrawChart";
import { useDuckDb } from "duckdb-wasm-kit";

import RawGraphWidget from "./RawgraphWidget";
import RightChartSidebar from "@/components/layout/Sidebar/RightChartSidebar";
import { setChangeDuckBookData } from "@/redux/features/navbar-slice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

interface element_type {
  type: number;
  value: string;
  path: {
    tablename: string;
    filepath: string;
    filesize: string;
  };
}

const TypingComponent = (props: {
  showDropMenu: boolean;
  selectComponentData: (data: any) => void;
}) => {
  const dispatch = useAppDispatch();
  const duckbook: any = useAppSelector((state) => state.navbarReducer.data);
  const { db, loading, error } = useDuckDb();
  const [isShowChildren, setIsShowChildren] = useState(false);
  const [isShowRawGraph, setIsRawGraph] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); //show dropmenu
  const [value, setValue] = useState(""); // current text of input component
  const [elements, setElements] = useState<element_type[]>([
    {
      type: 0,
      value: "",
      path: {
        tablename: "",
        filepath: "",
        filesize: "",
      },
    },
  ]);

  useEffect(() => {
    if (value === "/") {
      setIsDropdownOpen(true);
    } else {
      setIsDropdownOpen(false);
    }
  }, [value]);

  useEffect(() => {
    if (db != undefined) {
      setIsShowChildren(true);
    }
  }, [db]);

  useEffect(() => {
    console.log("111", duckbook);
    const element_data = JSON.parse(duckbook["DATA"]);
    element_data.map((item: any, index: number) => {
      if (item == null) {
        element_data.splice(index, 1);
      }
    });
    setElements(element_data);
  }, [duckbook]);

  const closeModal = () => {
    setIsDropdownOpen(false);
  };

  const closeRawGraphModal = () => {
    setIsRawGraph(false);
  };

  // handle dropdown events
  const handleChangeComponentType = (type: number) => {
    const array = [...elements];
    let path = { tablename: "", filepath: "", filesize: "" };
    let componet = { type: type, value: "", path: path };
    array.push(componet);
    console.log("array is ===", array);
    setElements(array);

    dispatch(setChangeDuckBookData(JSON.stringify(array)));
    setValue("");
  };

  const handleChangeDropdownOpen = (bool: boolean) => {
    setIsDropdownOpen(bool);
  };

  const handleSeletedComponentData = (data: any) => {
    props.selectComponentData(data);
  };

  const handleOnKeyDown = (event: KeyboardEvent) => {
    switch (event.code) {
      case "Enter":
        const array = [...elements];
        let path = { tablename: "", filepath: "", filesize: "" };
        const object = { type: 0, value: value, path: path };
        array.push(object);
        setElements(array);

        dispatch(setChangeDuckBookData(JSON.stringify(array)));
        setValue("");
        break;
      case "Slash":
        setValue("");
        break;
      default:
        break;
    }
  };

  const contents = () => {
    return elements.map((item, index) => (
      <div key={index}>
        {item.type === 0 ? (
          <p className="py-4 text-lg">{item.value}</p>
        ) : item.type === 1 ? (
          <Importfile
            type={item}
            index={index}
            db={db}
            getSelectedComponentData={(data: any) =>
              handleSeletedComponentData(data)
            }
          />
        ) : item.type === 11 ? (
          <Importfile
            type={item}
            index={index}
            db={db}
            getSelectedComponentData={(data: any) =>
              handleSeletedComponentData(data)
            }
          />
        ) : item.type === 12 ? (
          <Importfile
            type={item}
            index={index}
            db={db}
            getSelectedComponentData={(data: any) =>
              handleSeletedComponentData(data)
            }
          />
        ) : item.type === 13 ? (
          <Importfile
            type={item}
            index={index}
            db={db}
            getSelectedComponentData={(data: any) =>
              handleSeletedComponentData(data)
            }
          />
        ) : item.type === 15 ? (
          <Importfile
            type={item}
            index={index}
            db={db}
            getSelectedComponentData={(data: any) =>
              handleSeletedComponentData(data)
            }
          />
        ) : item.type === 2 ? (
          <RunSQL
            type={item}
            index={index}
            db={db}
            getSelectedComponentData={(data: any) =>
              handleSeletedComponentData(data)
            }
          />
        ) : item.type === 131 ? (
          <DrawChart type={item} index={index} db={db} chart_type={0} />
        ) : item.type === 132 ? (
          <DrawChart type={item} index={index} db={db} chart_type={1} />
        ) : item.type === 133 ? (
          <DrawChart type={item} index={index} db={db} chart_type={2} />
        ) : item.type === 4 ? (
          <AIPrompt
            type={item}
            index={index}
            db={db}
            getSelectedComponentData={(data: any) =>
              handleSeletedComponentData(data)
            }
          />
        ) : item.type === 141 ? (
          <SampleData
            type={item}
            index={index}
            db={db}
            getSelectedComponentData={(data: any) =>
              handleSeletedComponentData(data)
            }
          />
        ) : item.type === 142 ? (
          <SampleData
            type={item}
            index={index}
            db={db}
            getSelectedComponentData={(data: any) =>
              handleSeletedComponentData(data)
            }
          />
        ) : item.type === 143 ? (
          <SampleData
            type={item}
            index={index}
            db={db}
            getSelectedComponentData={(data: any) =>
              handleSeletedComponentData(data)
            }
          />
        ) : item.type === 144 ? (
          <SampleData
            type={item}
            index={index}
            db={db}
            getSelectedComponentData={(data: any) =>
              handleSeletedComponentData(data)
            }
          />
        ) : item.type === 5 ? (
          <RawGraphWidget closeModal={() => closeRawGraphModal()} />
        ) : (
          ""
        )}
      </div>
    ));
  };
  return (
    <div>
      <div>
        {isShowChildren && contents()}
        <input
          className="text-lg py-4 w-full border-none"
          type="text"
          value={value}
          placeholder="Type '/' to show the dropdown"
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyDown={(event: any) => handleOnKeyDown(event)}
        />
      </div>
      <div>
        {isDropdownOpen && (
          <DropdownModal
            closeModal={() => closeModal()}
            selectComponentType={(type: number) =>
              handleChangeComponentType(type)
            }
            changeDropdownOpen={(bool: boolean) =>
              handleChangeDropdownOpen(bool)
            }
          />
        )}
      </div>
    </div>
  );
};

export default TypingComponent;

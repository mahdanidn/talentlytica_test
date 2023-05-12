import { useState } from "react";
import "./App.css";

interface AspekNilai {
  [key: string]: {
    [key: string]: number;
  };
}

function App() {
  const [aspekNilai, setAspekNilai] = useState<AspekNilai>({
    aspek_penilaian_1: {
      mahasiswa_1: 0,
      mahasiswa_2: 0,
      mahasiswa_3: 0,
      mahasiswa_4: 0,
      mahasiswa_5: 0,
      mahasiswa_6: 0,
      mahasiswa_7: 0,
      mahasiswa_8: 0,
      mahasiswa_9: 0,
      mahasiswa_10: 0,
    },
    aspek_penilaian_2: {
      mahasiswa_1: 0,
      mahasiswa_2: 0,
      mahasiswa_3: 0,
      mahasiswa_4: 0,
      mahasiswa_5: 0,
      mahasiswa_6: 0,
      mahasiswa_7: 0,
      mahasiswa_8: 0,
      mahasiswa_9: 0,
      mahasiswa_10: 0,
    },
    aspek_penilaian_3: {
      mahasiswa_1: 0,
      mahasiswa_2: 0,
      mahasiswa_3: 0,
      mahasiswa_4: 0,
      mahasiswa_5: 0,
      mahasiswa_6: 0,
      mahasiswa_7: 0,
      mahasiswa_8: 0,
      mahasiswa_9: 0,
      mahasiswa_10: 0,
    },
    aspek_penilaian_4: {
      mahasiswa_1: 0,
      mahasiswa_2: 0,
      mahasiswa_3: 0,
      mahasiswa_4: 0,
      mahasiswa_5: 0,
      mahasiswa_6: 0,
      mahasiswa_7: 0,
      mahasiswa_8: 0,
      mahasiswa_9: 0,
      mahasiswa_10: 0,
    },
  });

  const [jsonOutput, setJsonOutput] = useState<string>("");

  const handleChange = (
    aspect: string,
    student: string,
    value: number
  ): void => {
    setAspekNilai((prevAspekNilai) => ({
      ...prevAspekNilai,
      [aspect]: {
        ...prevAspekNilai[aspect],
        [student]: value,
      },
    }));
  };

  const handleSave = () =>
    setJsonOutput(JSON.stringify(aspekNilai, null, "\t"));

  return (
    <>
      <div className="grid grid-cols-5 gap-4">
        <div className="h-full w-full bg-transparent"></div>
        {Object.keys(aspekNilai).map((_, idx) => (
          <div key={idx} className="h-full w-full p-2">
            <span className="">Aspek penilaian {idx + 1}</span>
          </div>
        ))}
      </div>
      {Object.keys(aspekNilai[Object.keys(aspekNilai)[0]]).map(
        (student, index) => (
          <div key={index} className="grid grid-cols-5 gap-4 my-2">
            <div className="flex items-center gap-x-2">
              <div className="h-5 w-5 rounded-full bg-white"></div>
              <p>Mahasiswa {index + 1}</p>
            </div>
            {[1, 2, 3, 4].map((element) => (
              <select
                onChange={(e) =>
                  handleChange(
                    `aspek_penilaian_${element}`,
                    student,
                    parseInt(e.target.value)
                  )
                }
              >
                <option value="0">0</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            ))}
          </div>
        )
      )}
      <div className="flex justify-end">
        <button className="text-right" onClick={handleSave}>
          Simpan
        </button>
      </div>
      {jsonOutput && (
        <div className="flex">
          <span>Output Dosen:</span>
          <pre className="">{jsonOutput}</pre>
        </div>
      )}
    </>
  );
}

export default App;

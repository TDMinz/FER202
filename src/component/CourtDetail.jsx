import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Select, DatePicker, Input, Button, Rate } from "antd";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import moment from "moment";
import { getCourts } from "../api/courtAPI";

const { Option } = Select;

const time = [
  "8:00 - 9:00",
  "9:00 - 10:00",
  "10:00 - 11:00",
  "11:00 - 12:00",
  "14:00 - 15:00",
  "15:00 - 16:00",
  "16:00 - 17:00",
  "17:00 - 18:00",
  "18:00 - 19:00",
  "19:00 - 20:00",
];

const CourtDetail = () => {
  const { id } = useParams();
  const [court, setCourt] = useState(null)
  
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTimes, setSelectedTimes] = useState([]);
  const [currentWeek, setCurrentWeek] = useState(0);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (selectedTimes) => {
    setSelectedTimes(selectedTimes);
  };

  const getWeekDates = (weekOffset = 0) => {
    const now = new Date();
    const startOfWeek = new Date(
      now.setDate(now.getDate() - now.getDay() + 1 + 7 * weekOffset)
    );
    return Array.from({ length: 7 }, (_, i) => {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);
      return date;
    });
  };

  useEffect(() => {
    getCourts().then((data) => {
      const court = data.find((court) => court.id == id);
      setCourt(court);
    });
  }, [id]);
  

  const weekDates = getWeekDates(currentWeek);

  if (!court) {
    return <div>Sân không tìm thấy</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="w-full md:w-1/2 p-4">
          <img
            src={court.image}
            alt={court.name}
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
        </div>
        <div className="w-full md:w-1/2 p-4">
          <h1 className="text-2xl font-bold">{court.name}</h1>
          <p className="text-gray-600">{court.location}</p>
          <p className="text-gray-600">Số lượng sân: {court.courts}</p>
          <Rate disabled defaultValue={5} />
          <p className="text-lg font-semibold">Giá: {court.price}</p>
          <div className="mt-4">
            <h3 className="text-xl font-semibold mb-2">Giờ hoạt động</h3>
            <ul>
              {court.availableTimes.map((time, index) => (
                <li key={index} className="text-gray-600">{time}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="my-4">
        <h3 className="text-xl font-semibold mb-2">Chọn loại đặt sân</h3>
        <Select defaultValue="fixed" className="w-full mb-2">
          <Option value="fixed">Đặt cố định</Option>
          <Option value="flexible">Đặt linh hoạt</Option>
        </Select>
        <DatePicker
          onChange={handleDateChange}
          className="w-full mb-2"
          placeholder="Chọn ngày"
        />
        <Select
          mode="multiple"
          placeholder="Chọn giờ"
          className="w-full mb-2"
          onChange={handleTimeChange}
        >
          {time.map((slot) => (
            <Option key={slot} value={slot}>
              {slot}
            </Option>
          ))}
        </Select>
        <Input placeholder="Họ và tên" className="mb-2" />
        <Input placeholder="Email" className="mb-4" />
        <Link to="/payment">
          <button className="w-full h-10 rounded bg-orange-500 text-white hover:bg-orange-600">
            Đặt ngay
          </button>
        </Link>
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">
          Đặt sân theo khung thời gian
        </h2>
        <div className="flex justify-between items-center mb-4">
          <Button
            icon={<ArrowLeftOutlined />}
            className="bg-gray-200"
            onClick={() => setCurrentWeek((prev) => prev - 1)}
          >
            Tuần trước
          </Button>
          <Button
            icon={<ArrowRightOutlined />}
            className="bg-gray-200"
            onClick={() => setCurrentWeek((prev) => prev + 1)}
          >
            Tuần sau
          </Button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          {weekDates.map((date, index) => (
            <div key={index} className="bg-white p-4 rounded shadow">
              <h3 className="font-bold">{moment(date).format("L")}</h3>
              <div className="mt-2">
                {time.map((slot) => (
                  <div key={slot} className="bg-gray-200 p-2 rounded mb-2">
                    {slot} - 120k
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourtDetail;

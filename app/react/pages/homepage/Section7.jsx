import React, { useState } from "react";
import Button from "../../components/base/Button";
import Card from "../../components/base/Card";
import Input from "../../components/base/Input";
import Textarea from "../../components/base/Textarea";

const Section7 = ({ isEnglish, handleSend, isLoading }) => {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const handleCLear = () => {
    setName("");
    setMessage("");
  };

  return (
    <Card useShadow={true}>
      <form>
        <Input
          label={isEnglish ? "Name" : "Nama"}
          type="text"
          className="mb-2"
          onChange={(e) => setName(e.target.value)}
          value={name}
          maxLength={40}
        />
        <Textarea
          label={isEnglish ? "Message" : "Pesan"}
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          maxLength={300}
        />
      </form>
      <div className="mt-auto grid grid-cols-3 gap-3">
        <div />
        <Button
          colorClassName="border-pink-300 hover:bg-pink-300 text-pink-300 hover:text-white"
          onClick={handleCLear}
        >
          {isEnglish ? "Remove" : "Hapus"}
        </Button>
        <Button
          colorClassName={
            isLoading
              ? "border-blue-100 text-blue-100"
              : "border-blue-300 hover:bg-blue-300 text-blue-300 hover:text-white"
          }
          onClick={() => {
            handleSend(name, message);
            handleCLear();
          }}
          disabled={isLoading}
        >
          {isLoading
            ? isEnglish
              ? "Sending..."
              : "Mengirim..."
            : isEnglish
            ? "Send"
            : "Kirim"}
        </Button>
      </div>
    </Card>
  );
};

export default Section7;

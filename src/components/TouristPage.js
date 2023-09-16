// src/components/TouristPage.js
import React, { useState } from 'react';

function TouristPage() {
  const [meetingLocation, setMeetingLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [hourlyRate, setHourlyRate] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [requestText, setRequestText] = useState('');

  return (
    <div>
      <h3>観光情報入力</h3>
      <div>
        <label>待ち合わせ場所（Googleマップが表示される予定の場所）</label>
        <input
          type="text"
          value={meetingLocation}
          onChange={(e) => setMeetingLocation(e.target.value)}
        />
      </div>
      <div>
        <label>終着地点（Googleマップが表示される予定の場所）</label>
        <input
          type="text"
          value={destination}
          onChange={(e) => setDestination(e.target.value)}
        />
      </div>
      <div>
        <label>待ち合わせ時間</label>
        <input
          type="text"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
        />
      </div>
      <div>
        <label>終了時間</label>
        <input
          type="text"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
        />
      </div>
      <div>
        <label>ゲストの人数</label>
        <input
          type="number"
          value={guestCount}
          onChange={(e) => setGuestCount(e.target.value)}
        />
      </div>
      <div>
        <label>ガイドの時給</label>
        <input
          type="number"
          value={hourlyRate}
          onChange={(e) => setHourlyRate(e.target.value)}
        />
      </div>
      <div>
        <label>支払い方法</label>
        <input
          type="text"
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
        />
      </div>
      <div>
        <label>ガイドへの依頼文</label>
        <textarea
          value={requestText}
          onChange={(e) => setRequestText(e.target.value)}
        />
      </div>
      
      <button>情報を保存</button>
    </div>
  );
}

export default TouristPage;

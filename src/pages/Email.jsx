import React from "react";

const mailboxes = [
  {
    status: true,
    email: "shreyababulkar.sb@gmail.com",
    health: 8.9,
    deliverability: "82%",
    notBlacklisted: true,
  },
  {
    status: true,
    email: "johnfoe@gmail.com",
    health: 9.2,
    deliverability: "70%",
    notBlacklisted: true,
  },
  {
    status: true,
    email: "shreyababulkar.sb@gmail.com",
    health: 8.5,
    deliverability: "81%",
    notBlacklisted: true,
  },
  {
    status: false,
    email: "tayndevb@gmail.com",
    health: 8.9,
    deliverability: "42%",
    notBlacklisted: false,
  },
];

export default function Email() {
  return (
    <div className="p-6 space-y-6">
      {/* Email limit warning */}
      <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4 rounded">
        <p>Your daily email limit is 100. Please increase by 50 per day. <span className="underline cursor-pointer text-sm ml-2">Edit limit</span></p>
      </div>

      {/* Performance Summary */}
      <div className="grid grid-cols-4 gap-4">
        {[
          { title: "Sent", value: "1876", sub: "Increase compared to last week" },
          { title: "Delivered", value: "1786", sub: "Increase compared to last week" },
          { title: "Landed in Inbox", value: "94%", sub: "Increase compared to last week" },
          { title: "Landed in Spam", value: "5%", sub: "Decreased compared to last week" },
        ].map((item, idx) => (
          <div key={idx} className="bg-white shadow rounded p-4">
            <p className="text-gray-500">{item.title}</p>
            <p className="text-2xl font-semibold">{item.value}</p>
            <p className={`text-sm ${item.sub.includes("Decrease") ? "text-red-500" : "text-green-500"}`}>{item.sub}</p>
          </div>
        ))}
      </div>

      {/* Mailbox Management */}
      <div className="bg-white shadow rounded p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Mailbox Management</h2>
          <button className="px-3 py-1 bg-blue-600 text-white rounded">Add new mailbox +</button>
        </div>
        <table className="w-full table-auto text-left">
          <thead>
            <tr className="text-gray-600">
              <th>Status</th>
              <th>Email address</th>
              <th>Account health</th>
              <th>Deliverability</th>
              <th>Not blacklisted</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {mailboxes.map((mb, idx) => (
              <tr key={idx} className="border-t">
                <td>
                  <input type="checkbox" checked={mb.status} readOnly />
                </td>
                <td>{mb.email}</td>
                <td>{mb.health}</td>
                <td>{mb.deliverability}</td>
                <td>{mb.notBlacklisted ? "✅" : "⚠️"}</td>
                <td>⋯</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Right Panel Summary */}
      <div className="grid grid-cols-3 gap-4">
        {/* Mailbox health */}
        <div className="bg-white shadow rounded p-4 space-y-2">
          <h3 className="font-semibold">Mailbox health</h3>
          <p><span className="text-2xl font-bold text-green-600">74%</span> - Good Health</p>
          <p>Mailbox temp.: <span className="text-orange-500 font-semibold">298 / day</span></p>
          <ul className="text-sm space-y-1">
            <li>✅ SPF</li>
            <li>✅ DKIM</li>
            <li>✅ DMARC</li>
            <li>✅ Not blacklisted</li>
          </ul>
          <p className="text-xs text-gray-400">Last updated 14 Dec '23</p>
        </div>

        {/* Deliverability score */}
        <div className="bg-white shadow rounded p-4 text-center">
          <h3 className="font-semibold mb-2">Deliverability Score</h3>
          <div className="text-4xl text-green-600 font-bold">94%</div>
        </div>

        {/* Mini Chart Placeholder */}
        <div className="bg-white shadow rounded p-4">
          <h3 className="font-semibold mb-2">Deliverability Trends</h3>
          <div className="text-center text-gray-400">[Chart Placeholder]</div>
        </div>
      </div>
    </div>
  );
}

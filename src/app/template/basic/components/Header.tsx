'use client';

import React from 'react';

export function Header() {
  return (
    <header className="bg-white shadow-sm py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">シンプルLP</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  ホーム
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  特徴
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900">
                  お問い合わせ
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}

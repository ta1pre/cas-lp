'use client';

import React from 'react';

export function Footer() {
  return (
    <footer className="bg-white py-6 mt-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm">
            © {new Date().getFullYear()} シンプルLP. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              プライバシーポリシー
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              利用規約
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              お問い合わせ
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

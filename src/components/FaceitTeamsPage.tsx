import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ChevronDown } from "lucide-react";

const FaceitTeamsPage = () => {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      {/* Logo */}
      <div className="mb-12">
        <svg width="139" height="30" viewBox="0 0 139 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0.5H21.7V7.1H7.8V12.1H20.8V18.3H7.8V29.5H0V0.5Z" fill="white"/>
          <path d="M34.4 0.5H26.2L26.1 29.5H33.9V19.7H41.1L44.2 29.5H52.6L48.8 18.2C51.4 16.2 52.8 13.3 52.8 9.7C52.8 3.9 49 0.5 41.5 0.5H34.4ZM34.4 7.1H40.4C43.1 7.1 44.5 8.2 44.5 10.3C44.5 12.4 43.1 13.5 40.4 13.5H34.4V7.1Z" fill="white"/>
          <path d="M59.7 22.9V18.3H75.1V11.5H59.7V7.1H76.7V0.5H51.9V29.5H77.2V22.9H59.7Z" fill="white"/>
          <path d="M112.5 29.5H121.1L110.2 0.5H100.9L90 29.5H98.6L100.2 25.2H110.9L112.5 29.5ZM102.6 18.6L105.6 10.2L108.6 18.6H102.6Z" fill="white"/>
          <path d="M122.2 0.5V29.5H138.2V22.9H130V0.5H122.2Z" fill="white"/>
          <path d="M80 0.5H87.8V29.5H80V0.5Z" fill="white"/>
          <path d="M94.5 7.1L90 0.5H87.8V1.9L94.5 12.3V7.1Z" fill="#FF5500"/>
        </svg>
      </div>

      {/* Card */}
      <div className="w-full max-w-md bg-faceit-darker p-8 rounded-sm">
        <h2 className="text-white text-center mb-6">FACEIT Teams приглашает вас присоединиться</h2>

        {/* Team invite */}
        <div className="bg-[#1A1A1A] p-5 rounded-sm mb-6">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 overflow-hidden rounded-full">
              <svg width="64" height="64" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="40" cy="40" r="40" fill="black"/>
                <path d="M39.8 20C31.6 20 25 26.6 25 34.8C25 43 31.6 49.6 39.8 49.6C48 49.6 54.6 43 54.6 34.8C54.6 26.6 48 20 39.8 20ZM25.8 53.4C25.8 53.4 31.9 58.4 39.7 58.4C47.5 58.4 53.6 53.4 53.6 53.4L61.5 58.8L52.2 39.7C52.2 39.7 55.9 33.6 51.1 26.2C46.3 18.8 33.2 18.8 28.4 26.2C23.6 33.6 27.3 39.7 27.3 39.7L18 58.8L25.8 53.4Z" fill="white"/>
              </svg>
            </div>
            <div className="flex-1">
              <h3 className="text-white text-xl font-bold">BleSeason</h3>
              <button className="text-xs font-semibold bg-transparent text-white mt-1">ПОЛУЧИТЬ ПРИГЛАШЕНИЕ</button>
            </div>
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-2 mb-6">
          <Checkbox 
            id="terms" 
            checked={agreed} 
            onCheckedChange={(checked) => setAgreed(checked as boolean)} 
            className="mt-1 data-[state=checked]:bg-faceit-orange data-[state=checked]:border-faceit-orange"
          />
          <label htmlFor="terms" className="text-sm text-white">
            Подтверждая участие, я соглашаюсь с условиями FACEIT Teams и правилами FACEIT
          </label>
        </div>

        {/* Confirm button */}
        <Button 
          className="w-full bg-faceit-button hover:bg-faceit-orange transition-colors text-white uppercase font-bold py-6"
          disabled={!agreed}
        >
          ПОДТВЕРДИТЬ
        </Button>
      </div>

      {/* Footer */}
      <div className="mt-6 flex flex-col md:flex-row items-center justify-between w-full max-w-md">
        {/* Language selector */}
        <div className="mb-4 md:mb-0">
          <Select defaultValue="ru">
            <SelectTrigger className="w-40 bg-faceit-darker text-white border-none">
              <SelectValue placeholder="Русский" />
              <ChevronDown className="h-4 w-4 opacity-50" />
            </SelectTrigger>
            <SelectContent className="bg-faceit-darker text-white">
              <SelectItem value="ru">Русский</SelectItem>
              <SelectItem value="en">English</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Footer links */}
        <div className="flex space-x-4 text-xs text-gray-400">
          <a href="#" className="hover:text-white">Помощь</a>
          <a href="#" className="hover:text-white">Политика</a>
          <a href="#" className="hover:text-white">Условия</a>
          <a href="#" className="hover:text-white">Настройки куки</a>
        </div>
      </div>
    </div>
  );
};

export default FaceitTeamsPage;

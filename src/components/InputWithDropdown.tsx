"use client";
import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

type Suggestion = {
    id: number;
    text: string;
};

type InputWithDropdownProps = {
    suggestions: Suggestion[];
};

const InputWithDropdown: React.FC<InputWithDropdownProps> = ({ suggestions }) => {
    const [inputValue, setInputValue] = useState<string>("");
    const [filteredSuggestions, setFilteredSuggestions] = useState<Suggestion[]>([]);

    useEffect(() => {
        if (inputValue === "") {
            setFilteredSuggestions([]);
        } else {
            setFilteredSuggestions(
                suggestions.filter((suggestion) =>
                    suggestion.text.toLowerCase().includes(inputValue.toLowerCase())
                )
            );
        }
    }, [inputValue, suggestions]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };

    const handleSuggestionClick = (text: string) => {
        setInputValue(text);
        setFilteredSuggestions([]);
    };

    return (
        <div className="relative">
            <Input
                value={inputValue}
                onChange={handleInputChange}
                placeholder="Type to search..."
                className="w-full"
            />
            {filteredSuggestions.length > 0 && (
                <ul className="absolute left-0 right-0 bg-white border border-gray-300 mt-1 rounded-md shadow-lg z-10">
                    {filteredSuggestions.map((suggestion) => (
                        <li
                            key={suggestion.id}
                            onClick={() => handleSuggestionClick(suggestion.text)}
                            className="p-2 cursor-pointer hover:bg-gray-200"
                        >
                            {suggestion.text}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default InputWithDropdown;

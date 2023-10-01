import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "./Icon";
import styles, { DARK_GRAY, PRIMARY_COLOR } from "../assets/styles";

const City = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedCity, setSelectedCity] = useState("Bucuresti");
  const cities = ["Bucuresti", "Cluj-Napoca", "Timisoara", "Iasi"];

  const handleCitySelect = (city: string) => {
    setSelectedCity(city);
    setIsDropdownOpen(false);
  };

  return (
    <View style={styles.cityContainer}>
      <TouchableOpacity
        style={styles.cityButton}
        onPress={() => setIsDropdownOpen(!isDropdownOpen)}
      >
        <Text style={styles.cityButtonText}>
          <Icon name="location-sharp" size={13} color={DARK_GRAY} /> {selectedCity}
        </Text>
        <Icon name={isDropdownOpen ? "chevron-up" : "chevron-down"} size={16} color={PRIMARY_COLOR} />
      </TouchableOpacity>
      {isDropdownOpen && (
        <View style={styles.dropdown}>
          {cities.map((city) => (
            <TouchableOpacity
              key={city}
              style={styles.dropdownItem}
              onPress={() => handleCitySelect(city)}
            >
              <Text style={styles.dropdownItemText}>{city}</Text>
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
};

export default City;
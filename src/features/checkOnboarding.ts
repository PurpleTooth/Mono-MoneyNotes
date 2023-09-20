import { useState, useEffect } from "react";
import { getObject } from "../shared/functions/asyncstorage"; // Подставьте путь до вашей функции получения данных из хранилища

const useCheckOnboarding = () => {
  const [onboarded, setOnboarded] = useState<boolean | null>(null);

  getObject("onboarded").then((value) => {
    if (value || value.onboarded) {
      setOnboarded(true);
    } else {
      setOnboarded(false);
    }
  });

  return onboarded;
};

export default useCheckOnboarding;

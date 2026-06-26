const { useState } = React;

interface PetData {
  Happiness: number;
  Hunger: number;
  Energy: number;
  Name: string;
}

const defaultPet: PetData = {
  Happiness: 100,
  Hunger: 0,
  Energy: 100,
  Name: "",
};


export const PetGame = ({ pet }: { pet: PetData }) => {
     return (
    <div></div>
};
const STORAGE_KEY = "football_player_card";

function loadPet(): PetData {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return {
        ...defaultPlayer, 
        ...JSON.parse(saved) 
      }
    };
  } catch (error) {
    console.log("Failed to load player data, using defaults:", error);
  }
  return defaultPlayer;
}

export const FootballPlayerCard = () => {
  const [player, setPlayer] = useState<PlayerData>(loadPlayer);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(player));
    } catch (error) {
      console.log("Failed to save player data:", error);
    }
  }, [player]);

  return (
    <div className="page">
        <div className="header-inner">
          <p className="header-title">Football Card Builder</p>
          <p className="header-subtitle">Customize your player card</p>
        </div>
        
  );
};
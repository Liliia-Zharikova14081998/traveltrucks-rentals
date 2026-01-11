'use client';

import { useState } from 'react';
import css from './Sidebar.module.css';

type SidebarProps = {
  onSearch: (filters: any) => void;
};

const Sidebar = ({ onSearch }: SidebarProps) => {
  const [locationInput, setLocationInput] = useState('');
  const [selectedEquipment, setSelectedEquipment] = useState<string[]>([]);
  const [selectedForm, setSelectedForm] = useState<string[]>([]);

const handleLocationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLocationInput(e.target.value);
  }

const handleSearchClick = () => {
    onSearch({
      location: locationInput,
      equipment: selectedEquipment,
      form: selectedForm,
    });
  };

  const toggleEquipment = (value: string) => {
  setSelectedEquipment((prev) =>
    prev.includes(value) 
      ? prev.filter((item) => item !== value) 
      : [...prev, value] 
  );
};

const toggleType = (value: string) => {
  setSelectedForm((prev) => (prev.includes(value) ? [] : [value]));
};

  return (
        <div className={css.sidebar}>

            <div className={css.locationSection}>
                <label className={css.locationLabel}>Location</label>
          <div className={css.locationInputWrapper}>   
          <svg width="16" height="16" className={css.locationIcon}>
                        <use href="/symbol-defs.svg#icon-Vector" />
                </svg>
                <input 
                    type="text" 
                    placeholder="City" 
              className={css.locationInput} 
              value={locationInput}
              onChange={handleLocationChange}
            />
            </div>   
            </div>

            <p className={css.locationLabel}>Filters</p>
            
            <div className={css.equipmentSection}>
                <h3 className={css.filterHeading}>
                    Vehicle equipment
          </h3>

                <div className={css.filters}>

           <button type="button" className={`${css.filterBtn} button ${selectedEquipment.includes('AC') ? css.active : ''}`} onClick={() => toggleEquipment('AC')}>
            <svg width="32" height="32" className={css.featureIcon}>
            <use href="/symbol-defs.svg#icon-wind" />
            </svg>
            <span>AC</span>
                        
        </button>
          <button type="button" className={`${css.filterBtn} button ${selectedEquipment.includes('transmission') ? css.active : ''}`} onClick={() => toggleEquipment('transmission')}>
            <svg width="32" height="32"><use href="/symbol-defs.svg#icon-diagram" /></svg>
            <span>Automatic</span>
        </button>

          <button type="button" className={`${css.filterBtn} button ${selectedEquipment.includes('kitchen') ? css.active : ''}`} onClick={() => toggleEquipment('kitchen')}>
            <svg width="32" height="32"><use href="/symbol-defs.svg#icon-Group" /></svg>
            <span>Kitchen</span>
         </button>
                    
          <button type="button" className={`${css.filterBtn} button ${selectedEquipment.includes('TV') ? css.active : ''}`} onClick={() => toggleEquipment('TV')}>
            <svg width="32" height="32"><use href="/symbol-defs.svg#icon-tv" /></svg>
            <span>TV</span>
        </button>

          <button type="button" className={`${css.filterBtn} button ${selectedEquipment.includes('bathroom') ? css.active : ''}`} onClick={() => toggleEquipment('bathroom')}>
            <svg width="32" height="32"><use href="/symbol-defs.svg#icon-ph_shower" /></svg>
            <span>Bathroom</span>
          </button>
                </div>
                
                <div className={css.typeSection}>
                <h3 className={css.filterHeading}>
                    Vehicle type
                </h3>

                <div className={css.types}>

           <button type="button" className={`${css.filterBtn} button ${selectedForm.includes('panelTruck') ? css.active : ''}`} onClick={() => toggleType('panelTruck')}>
            <svg width="32" height="32" >
            <use href="/symbol-defs.svg#icon-Vector-1" />
            </svg>
            <span>Van</span>
                        
        </button>
          <button type="button" className={`${css.filterBtn} button ${selectedForm.includes('fullyIntegrated') ? css.active : ''}`} onClick={() => toggleType('fullyIntegrated')}>
            <svg width="32" height="32" className={css.featureIcon}><use href="/symbol-defs.svg#icon-Vector-2" /></svg>
            <span>Fully Integrated</span>
        </button>

          <button type="button" className={`${css.filterBtn} button ${selectedForm.includes('alcove') ? css.active : ''}`} onClick={() => toggleType('alcove')}>
            <svg width="32" height="32"><use href="/symbol-defs.svg#icon-Vector-3" /></svg>
            <span>Alcove</span>
         </button>
        </div>
                </div>

            </div>
            <button onClick={handleSearchClick} type='button' className={`${css.searchBtn} button`}>Search</button>
        </div>
    );
};
            
export default Sidebar;
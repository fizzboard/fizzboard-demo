import { LibrarianAdminData } from "~/demo-content/user-data/librarian";
import { UserData } from "~/components/user-context/user-data-context";
import { CorporateHrAdminData } from "~/demo-content/user-data/hr-corporate";
import { DisplayPostTesterData } from "~/demo-content/user-data/tester-display";
import { ProudParentData } from "~/demo-content/user-data/proud-parent";
import { TeamLeadCorporateData } from "~/demo-content/user-data/team-lead-corporate";
import { TradeShowOrganizerScreenAdminData } from "~/demo-content/user-data/trade-show-organizer";
import { TradeShowVendorData } from "~/demo-content/user-data/trade-show-vendor";
import { TesterBoardAdminData } from "~/demo-content/user-data/tester-board-admin";

const USER_PROFILE_ID_STORAGE_KEY = 'fizzboard-user-profile-id';

export const AllDemoUsersData = [
  TradeShowVendorData,
  TeamLeadCorporateData,
  ProudParentData,
  DisplayPostTesterData,
  TradeShowOrganizerScreenAdminData,
  CorporateHrAdminData,
  LibrarianAdminData,
  TesterBoardAdminData,
];

export const AllAdminUsersData = AllDemoUsersData
  .filter(user => user.profile.demoRole === "DisplayAdmin")
  .sort((a, b) => a.profile.name.localeCompare(b.profile.name));

export const AllMessagePosterUsersData = AllDemoUsersData
  .filter(user => user.profile.demoRole === "MessagePoster")
  .sort((a, b) => a.profile.name.localeCompare(b.profile.name));


export const loadUserDataFromStorage = (): UserData => {
  const storedProfileId = localStorage.getItem(USER_PROFILE_ID_STORAGE_KEY);
  if (storedProfileId) {
    const userData = AllDemoUsersData.find(user => user.profile.id === storedProfileId);
    if (userData) {
      return userData;
    }
  }
  return LibrarianAdminData;
};

export const updateInitialUserInStorage = (userData: UserData): void => {
  try {
    localStorage.setItem(USER_PROFILE_ID_STORAGE_KEY, userData.profile.id);
  } catch (error) {
    console.error('Error saving user profile ID to storage:', error);
  }
};


export const initialUserData = loadUserDataFromStorage();

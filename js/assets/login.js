import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  setDoc,
  deleteDoc,
} from "https://www.gstatic.com/firebasejs/10.9.0/firebase-firestore.js";
const firebaseConfig = {
  apiKey: "AIzaSyAtQccyF0CBM-f9kRhY15B4E7tCpqLCmDs",
  authDomain: "colectivo-de-idiomas.firebaseapp.com",
  projectId: "colectivo-de-idiomas",
  storageBucket: "colectivo-de-idiomas.appspot.com",
  messagingSenderId: "21235746434",
  appId: "1:21235746434:web:54c3b1e041f3fb0d94169b",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const pricesFormDB = document.getElementById("pricesFormDB");

async function publishGeneralCoursesPricesDB() {
  // e.preventDefault();

  const monthly = pricesFormDB["monthlyPay"].value;
  const course = pricesFormDB["coursePay"].value;

  try {
    await setDoc(doc(db, "prices", "generalCourses"), {
      monthlyPay: +monthly,
      coursePay: +course,
    });
  } catch (err) {
    throw new Error("puclishCoursePricesDB", err);
  }
}
pricesFormDB.addEventListener("submit", publishGeneralCoursesPricesDB);

async function getPrices() {
  try {
    const pricesCol = doc(db, "prices", "generalCourses");
    const pricesSnapshot = await getDoc(pricesCol);
    const pricesList = pricesSnapshot.data();
    console.log(pricesList);

    return pricesList;
  } catch (err) {
    throw new Error("get Docs", err);
  }
}

export const pricesDB = await getPrices();

const coursesScheduleDataDB2 = { coursesSchedule: [] };

const coursesForm = document.getElementById("coursesScheduleDB");

const addButton = document.getElementById("add");
addButton.addEventListener("click", (e) => {
  e.preventDefault();
  const course = {
    name: coursesForm["name"].value,
    date: coursesForm["date"].value,
    day: coursesForm["day"].value,
    time: coursesForm["time"].value,
  };
  coursesScheduleDataDB2.coursesSchedule.push(course);
  console.log(coursesScheduleDataDB2);
  const showCourses = document.createElement("div");
  coursesForm.insertAdjacentElement("afterend", showCourses);
  coursesScheduleDataDB2.coursesSchedule.forEach((course) => {
    showCourses.innerHTML = `
   ${course.name} | ${course.date} | ${course.day} | ${course.time}
    `;
    console.log(course);
  });
});
const publishSchedButton = document.getElementById("publishSchedButton");
publishSchedButton.addEventListener("click", async (e) => {
  e.preventDefault();
  console.log(courseScheduleDB2);
  try {
    await setDoc(
      doc(db, "coursesSchedule", "coursesSchedule"),
      coursesScheduleDataDB2
    );
  } catch (err) {
    throw new Error("publish courses", err);
  }
});

async function getCoursesSchedule() {
  try {
    const courseSshedulesCol = doc(db, "coursesSchedule", "coursesSchedule");
    const courseSshedulesSnapshot = await getDoc(courseSshedulesCol);
    const courseSshedulesList = courseSshedulesSnapshot.data();
    return courseSshedulesList;
  } catch (err) {
    throw new Error("get CoursesShedule", err);
  }
}

export const courseScheduleDB2 = await getCoursesSchedule();

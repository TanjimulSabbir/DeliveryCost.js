function seerToMon(seer) {
    Mon = 0;
    Mon = seer / 40;
    return Mon
}
seer = 80;
Result = seerToMon(seer);
console.log(seer, 'Seer =', Result, 'Mon')
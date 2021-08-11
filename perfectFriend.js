function perfectFriend(Friends_Name) {
    Name = [];
    PerfectName = [];
    for (i = 0; Friends_Name[i]; i++) {
        Name[i] = Friends_Name[i];
        if (Name[i].length <= 5) {
            PerfectName[i] = Name[i]
        }
    }
    return PerfectName
}
Friends_Name = ['Tanjimul', 'Sabbir', 'Ashik', 'Jobair', 'Sohag', 'Tarek', 'Polash', 'Rasib']
result = perfectFriend(Friends_Name)
console.log("result =", result)

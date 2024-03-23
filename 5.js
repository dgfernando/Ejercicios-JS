function likes(n) {
    if (n < 1000) {
        return n.toString();
    } else if (n >= 1000 && n < 1000000) {
        return `${Math.floor(n / 1000)}K`;
    } else {
        return `${Math.floor(n / 1000000)}M`;
    }
}

// código de prueba
console.log(likes(983)); // "983"
console.log(likes(1900)); // "1K"
console.log(likes(54000)); // "54K"
console.log(likes(120800)); // "120K"
console.log(likes(25222444)); // "25M"

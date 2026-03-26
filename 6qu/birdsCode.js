function birdCodes(names) {
    return names.map(name => {
        name = name.split('-').join(' ');
        const words = name.split(' ');
        let code = '';
        switch (words.length) {
            case 1:
                code = words[0].slice(0, 4);
                break;
            case 2:
                code = words[0].slice(0, 2) + words[1].slice(0, 2);
                break;
            case 3:
                code = words[0][0] + words[1][0] + words[2].slice(0, 2);
                break;

            default:
                code = words[0][0] + words[1][0] + words[2][0] + words[3][0];
        }
        return code.toUpperCase();
    });
}
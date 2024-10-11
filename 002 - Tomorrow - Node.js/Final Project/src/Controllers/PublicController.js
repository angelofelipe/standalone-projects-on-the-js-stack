import path from 'path';

export function homeGETP(req, res) {
    res.sendFile(path.resolve('./src/Views/index.html'));
}
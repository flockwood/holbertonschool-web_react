export interface MajorCredits {
    credits: number;
    _brand: 'MajorCredits';
}

export interface MinorCredits {
    credits: number;
    _brand: 'MinorCredits';
}

export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: 'MajorCredits'
    };
}

export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        _brand: 'MinorCredits'
    };
}

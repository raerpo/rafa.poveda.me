import { formatDate } from 'utils';

const Education = ({ institution, area, startDate, endDate, project }) => {
  return (
    <div className="education-item">
      <div className="education-item__head">
        <div>
          <h3 className="education-item__title">
            <span className="education-item__title-position">{area}</span>
            <span className="education-item__title-company">
              {' '}
              - {institution}
            </span>
          </h3>
          <div className="education-item__dates">
            <p className="education-item__dates-range">
              ( {formatDate(startDate)} - {formatDate(endDate)} )
            </p>
          </div>
        </div>
      </div>
      <div className="education-item__content">
        <p className="education-item__content-summary">
          {project.name} - {project.grade}
        </p>
      </div>
      <style jsx>
        {`
          .education-item {
            border: 1px solid rgba(0, 0, 0, 0.1);
            padding: 1.5rem 1rem;
            border-radius: 0.5rem;
            margin-bottom: 1rem;
          }
          .education-item * {
            margin: 0;
          }
          .education-item .education-item__head {
            border-bottom: 2px solid var(--primary-color);
            padding-bottom: 0.5rem;
            margin-bottom: 1rem;
          }
          .education-item .education-item__head {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .education-item .education-item__title {
            font-size: 1.1rem;
          }
          .education-item .education-item__title-company {
            font-size: 0.9rem;
            font-weight: 500;
          }
          .education-item .education-item__title-position {
            color: var(--primary-color);
          }
          .education-item .education-item__dates {
            display: flex;
            align-items: baseline;
            gap: 0.5rem;
          }
          .education-item .education-item__dates .education-item__dates-time {
            font-weight: 700;
            margin-bottom: 0.3rem;
          }
          .education-item .education-item__dates .education-item__dates-range {
            font-size: 0.8rem;
          }
          .education-item .education-item__location {
            font-size: 0.7rem;
          }
          .education-item .education-item__content {
            font-size: 0.9rem;
          }
          .education-item
            .education-item__content
            .education-item__content-summary {
            margin-bottom: 1rem;
          }
          .education-item
            .education-item__content
            .education-item__content-highlights {
            margin: 0;
            padding-left: 1rem;
          }
          .education-item
            .education-item__content
            .education-item__content-highlights
            li {
            margin-bottom: 0.3rem;
          }
        `}
      </style>
    </div>
  );
};

export default Education;
